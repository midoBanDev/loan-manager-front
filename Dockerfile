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
ARG REACT_APP_GOOGLE_CLIENT_ID
ENV REACT_APP_GOOGLE_CLIENT_ID=${REACT_APP_GOOGLE_CLIENT_ID}

RUN npm run build


#----------------------------------------------------------------------

# 실행 스테이지 분리
FROM nginx:alpine

# 빌드 결과물을 nginx의 서비스 디렉토리로 복사
COPY --from=build /app/build/ /usr/share/nginx/html/

# 80번 포트 노출
EXPOSE 80

# nginx 실행
CMD ["nginx", "-g", "daemon off;"]