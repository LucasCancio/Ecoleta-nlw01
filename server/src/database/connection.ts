import knex from 'knex';
import path from 'path';//Padroniza o caminho para acesso de uma pasta


const connection = knex({
    client:'sqlite3',
    connection: {//__dirname -> retorna o caminho para o diretório do arquivo que está executando ele
        filename: path.resolve(__dirname, 'database.sqlite' )
    },
    useNullAsDefault:true,
});

export default connection;