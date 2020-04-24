# TypeScript安装

## 安装node.js和npm

```shell
PS D:\learn\ts> node -v
v12.14.0
PS D:\learn\ts> npm -v
6.14.4
```

## 通过npm安装TypeScript
```shell
npm install -g typescript
PS D:\learn\ts> tsc -v
Version 3.8.3
```

## 创建第一个TypeScript文件
```typescript
function greeter(person) {
    return "hello, " + person
}

let user = "snn"

document.body.textContent = greeter(user)
```
## 编译ts文件
```shell
PS D:\learn\ts\day1\code> tsc .\greeter.ts
```

## 嵌入到html中并预览
```html
<!DOCTYPE html>
<html>
    <head>
        <title>TypeScript Greeter</title>
    </head>
    <body>
        <script src="greeter.js"></script>
    </body>
</html>
```