## Installation
```bash
yarn
```

## Running the app
```bash
docker-compose up -d
yarn start
```

## Test
```bash
yarn test
```

## API
GET: http://127.0.0.1:3000/settings
POST: http://127.0.0.1:3000/settings { "service_fee_rate": 10, "minimum_fee": 10.25 }
GET: http://127.0.0.1:3000/ticket-tier
POST: http://127.0.0.1:3000/ticket-tier { "buyer_price": 15.06, "service_fee": 100 }
POST: http://127.0.0.1:3000/ticket-tier { "promoter_receives_price": 30, "service_fee": 100 }
