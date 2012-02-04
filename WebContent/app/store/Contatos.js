Ext.define('Egenial.store.Contatos', {
    extend: 'Ext.data.Store',
    model: 'Egenial.model.Contato',
    autoLoad: true,
    pageSize: 35,
    autoLoad: {start: 0, limit: 35},
    
    proxy: {
        type: 'ajax',
        api: {
        	read : 'contato/listar.action',
            create : 'contato/criar.action',
            update: 'contato/update.action',
            destroy: 'contato/delete.action'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            encode: false,
            root: 'data'
        }
    }
});