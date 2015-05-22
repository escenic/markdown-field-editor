/*
 * init.js
 * Copyright (C) 2015 hasnaer <hasnaer@escenic>
 *
 */

$(window).load(function () {
  
  var epicEditor = new EpicEditor({
    container : 'epiceditor',
    textarea  : 'epicvalue',
    basePath  : 'EpicEditor/epiceditor'
  });

  $('#epicvalue').val('##wahoo');

// var fieldEditor = require('field-editor');

  epicEditor.on('update', function () {
    console.log(epicEditor.getElement('editor').body.innerHTML);
//  fieldEditor.value = epicEditor.getElement('editor').body.innerHTML;    
  });

/*
 * Hmm det må være en bedre måte å oppdatere den editor ... 
 * unload load really? ikke bra hasnæ
 * lese opp den "episke" dokumentasjon !!
 * en kommentar fra meg til meg
 *
  fieldEditor.on('value-changed', function (){
    epicEditor.unload();
    $('#epicvalue').val(fieldEditor.value);
    epicEditor.load();
  });
 */

  epicEditor.load();
});
