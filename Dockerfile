# 소스 다운로드 스테이지 분리
FROM alpine/git as source
WORKDIR /app
# 소스 코드 다운로드
RUN git clone https://github.com/midoBanDev/loan-manager-front.git .

#----------------------------------------------------------------------

# 패키지 설치 스테이지 분리
# 베이스 이미지를 분리하면 변경된 소스 코드의 영향을 받지 않는다.
FROM node:22.11.0 as dependencies
WORKDIR /app

# 패키지 레지스트리 저장소 변경.
RUN npm config set registry https://registry.npmmirror.com

COPY --from=source /app/package*.json ./

# BuildKit 캐시 마운트 사용하여 캐시 저장
# maxsockets 10 으로 동시 다운로드 수 제한
RUN --mount=type=cache,target=/root/.npm,id=npm \
    npm install --maxsockets 10

#----------------------------------------------------------------------

# 빌드 스테이지 분리
FROM node:22.11.0 as build
WORKDIR /app

COPY --from=source /app .
 
COPY --from=dependencies /app/node_modules ./node_modules

# 빌드 시 build-arg 로 환경변수 전달
# GOOGLE_CLIENT_ID는 빌드 전에 전달되어야 한다.
# node 기반의 프로젝트는 Java 기반 프로젝트와 다르게 빌드 전 환경변수를 설정한 후 빌드되어야 한다.
ARG REACT_APP_GOOGLE_CLIENT_ID
ENV REACT_APP_GOOGLE_CLIENT_ID=${REACT_APP_GOOGLE_CLIENT_ID}

RUN npm run build


#----------------------------------------------------------------------

# 실행 스테이지 분리
FROM nginx:alpine

# 기본 유틸리티 설치
# Debian/Ubuntu 기반 이미지에서 패키지 설치
# apt-get update: 패키지 목록을 최신 상태로 갱신.
# apt-get install: 필요한 패키지를 설치.
# rm -rf /var/lib/apt/lists/*: 패키지 설치 후 더 이상 필요 없는 캐시를 삭제.
#RUN apt-get update && apt-get install -y \
#    iputils-ping \
#    net-tools \
#    curl \
#    vim \
#    && rm -rf /var/lib/apt/lists/*

# alpine 기반 이미지에서 패키지 설치
# Alpine에서는 별도로 rm -rf /var/lib/apt/lists/*를 실행할 필요가 없다.
RUN apk update && apk add --no-cache \
    iputils \
    net-tools \
    curl \
    vim \ 
    envsubst

COPY nginx.conf /etc/nginx/conf.d/default.conf.template

# 환경변수 기본값 설정
ENV BACKEND_HOST=api-server
ENV BACKEND_PORT=8080

# docker-entrypoint.sh 파일을 복사하고 실행 권한 부여
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# 빌드 결과물을 nginx의 서비스 디렉토리로 복사
COPY --from=build /app/build/ /usr/share/nginx/html/


# 80번 포트 노출
EXPOSE 80

# nginx 실행
ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]