# markdown-field-editor

This experiment needs to be handled with love <3 (please imagine the heart is properly rendered)

Please refer to [Content Studio custom field editors](http://docs.escenic.com/ece-cs-plugin-guide/5.7/custom_field_editors.html)
to understand the purpose and scope of this experiment.

## mockup requirements

* nodejs
* npm
* common sense

## mockup setup

```
git clone https://github.com/escenic/markdown-field-editor.git
cd markdown-field-editor
git submodule update --init --recursive
npm install .
```

Note that this experiment makes use of the latest changes in [EpicEditor](https://github.com/OscarGodson/EpicEditor) repo. for a stabler version you might want to adjust your html to rely on latest release of EpicEditor.

## mockup launch

```
node mockup.js
```

This will serve the content of **webapp** folder

Now you can play around with **webapp/index.html** and **webapp/js/init.js** to do whatever
magic you want (or need) and watch it live on your browser

