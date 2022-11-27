import { DB_HOST, DB_DATABASE } from '@config';

export const dbConnection = {
  url: `mongodb://${DB_HOST}/${DB_DATABASE}`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
};

export let transactionOptions = {
  readConcern: { level: 'local' },
  writeConcern: { w: 'majority' },
  readPreference: { mode: 'primary' },
  maxCommitTimeMS: 100000
}
