Ext.define('Egenial.controller.Contatos', {
    extend: 'Ext.app.Controller',

    stores: ['Contatos'],

    models: ['Contato'],

    views: ['contato.Formulario', 'contato.Grid'],

    refs: [{
            ref: 'contatoPanel',
            selector: 'panel'
        },{
            ref: 'contatogrid',
            selector: 'contatogrid'
        }
    ],

    init: function() {
        this.control({
            'contatogrid dataview': {
                itemdblclick: this.editarContato
            },
            'contatogrid button[action=add]': {
            	click: this.editarContato
            },
            'contatogrid button[action=delete]': {
                click: this.deleteContato
            },
            'contatogrid button[action=save]': {
                click: this.updateContato
            }
        });
    },

    editarContato: function(grid, record) {
        var edit = Ext.create('Egenial.view.contato.Formulario').show();
        
        if(record){
        	edit.down('form').loadRecord(record);
        }
    },
    
    updateContato: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();
        
        
		if (values.id > 0){
			record.set(values);
		} else{
			record = Ext.create('Egenial.model.Contato');
			record.set(values);
			record.setId(0);
			this.getContatosStore().add(record);
		}
        
		win.close();
        this.getContatosStore().sync();
    },
    
    deleteContato: function(button) {
    	
    	var grid = this.getContatogrid(),
    	record = grid.getSelectionModel().getSelection(), 
        store = this.getContatosStore();

	    store.remove(record);
	    this.getContatosStore().sync();
    }
});
