# 4help-mobile


## Requsitos

=> NodeJS, Yarn/Npm, Json Web Server.

## Run Project Mobile

  ```yarn or npm install```

 ```json-server jobs-server.json -p 3334```
 
 ```yarn start -c```
 
 ## Run Project Back-end
 
 Está neste repositório: https://github.com/atirson/curso-rockeseat/tree/master/backend
 
Configure a Database acessando o arquivo ormconfig.example.json

E depois ```yarn dev:server```


## Exceções 

Pode causar conflitos quando for rodar a parte back-end e json-server podendo ser problema de redirecionamento de portas 
neste caso é só rodar comando:

``` adb reverse tcp:3334 tcp:3334 ```

``` adb reverse tcp:3333 tcp:3333 ```
