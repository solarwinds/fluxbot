FROM minddocdev/hubot
USER root
RUN apk add curl
RUN curl -Lo /usr/local/bin/fluxctl https://github.com/fluxcd/flux/releases/download/1.19.0/fluxctl_linux_amd64
RUN chmod +x /usr/local/bin/fluxctl
RUN chown 700 /usr/local/bin/fluxctl

USER hubot
COPY scripts/fluxctl.js scripts

ENV HUBOT_NAME "fluxbot"

ENTRYPOINT ["./entrypoint.sh"]
CMD ["--name", "fluxbot", "--adapter", "slack"]
