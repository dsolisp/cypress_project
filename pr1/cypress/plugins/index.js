// cypress/plugins/index.js

import db from '../support/db';

module.exports = (on, config) => {
    on('task', {
        queryDatabase: (sql) => {
            return db.query(sql);
        },
    });
};
