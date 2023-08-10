import config = require('../../Configs/MainConfig');
import { knex } from 'knex'

export const dbUser = knex(config.dbUser);
