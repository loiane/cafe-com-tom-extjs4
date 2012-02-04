/**
 * Ext JS Library 4.0.0
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 *	
 * Cafe com Tom
 * 04/fev/2012
 * 
 * @author Loiane Groner
 * http://loianegroner.com (English)
 * http://loiane.com (Portuguese)
 */
Ext.application({
    name: 'Egenial',

    controllers: [
        'Contatos'
    ],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'contatogrid'
                }
            ]
        });
    }
});
