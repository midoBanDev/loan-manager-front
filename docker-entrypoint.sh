#!/bin/sh
# set -e는 에러가 발생하면 스크립트를 즉시 종료하도록 설정한다.
# 특정 명령이 실패할 경우, 그 이후의 명령은 실행되지 않는다.
set -e

# default.conf.template 파일에서 환경 변수를 대체하고 결과를 default.conf에 저장
# envsubst는 환경 변수 값을 텍스트에 삽입(substitute)하는 유틸리티.
# ENV BACKEND_HOST=api-server**로 환경 변수가 설정되면,
# 스크립트 실행 시 envsubst가 템플릿 파일(/etc/nginx/conf.d/default.conf.template)에서 **${BACKEND_HOST}**를 찾아 설정된 값(api-server)으로 대체한다.
# 최종 결과는 /etc/nginx/conf.d/default.conf 파일에 저장된다.
envsubst '${BACKEND_HOST} ${BACKEND_PORT}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

# exec는 현재 쉘 프로세스를 대체하여 지정된 명령을 실행합니다.
# "$@"는 스크립트 실행 시 전달된 모든 인수를 그대로 전달합니다.
# 예를 들어, docker-entrypoint.sh nginx -g daemon off;으로 실행되면 nginx -g "daemon off;"가 실행됩니다.
exec "$@"
