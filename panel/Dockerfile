FROM node:14 AS builder
WORKDIR /app
COPY ./ .

RUN npm install
RUN npm run build

FROM node:14
WORKDIR /app
COPY --from=builder /app/package.json /app/package-lock.json ./
RUN npm install --production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["npm", "start"]
