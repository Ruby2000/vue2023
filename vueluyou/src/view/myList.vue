<template>
  <ul class="todo-main">
    <li>
      <label>
        <input type="checkbox"/>
        <span>xxxxx</span>
      </label>
      <button class="btn btn-danger" style="display:none">删除</button>
    </li>
  </ul>


// 在拆 到 MyItem中

  <ul class="todo-main">
    <MyItem/>
    // 想要数据多 就继续引入 <MyItem/> 组件
  </ul>
</template>

<style>
/*list*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
