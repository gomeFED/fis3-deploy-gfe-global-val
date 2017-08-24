# fis3-deploy-gfe-global-val
fis3-deploy-gfe-global-val


## INSTALL

```bash
npm install [-g] fis3-deploy-gfe-global-val
```

## USE

```js
fis.match('**', {
    deploy: [
        fis.plugin('gfe-global-val',{
            needGfisGlobalVar: true,
            gfisGlobalVarStr:''
        }),
        fis.plugin('local-deliver') //must add a deliver, such as http-push, local-deliver
    ]
});
```