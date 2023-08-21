# Builder stage
FROM node:18 as builder

WORKDIR /app

COPY package.json ./
RUN yarn install
RUN yarn add sharp

COPY . ./

RUN yarn run build

FROM node:18

WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

CMD ["yarn", "start"]
