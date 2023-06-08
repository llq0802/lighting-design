---
title: LTreeCheckbox
toc: content
---

# LTreeCheckbox

父组件通过 ref 唤起子组件 、用于业务功能代码分离、避免过多状态和业务代码集中在一个文件上。

基于 `useImperativeHandle`、可以相互传参。各组件拥有独立的状态、状态更新也不会造成其他组件重复执行。

## 代码演示

### 基础用法

<code src="./demos/Demo1.tsx" ></code>

## API
