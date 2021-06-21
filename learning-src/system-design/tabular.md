### Design table with fixed header

https://errorsea.com/how-to-fixed-table-header-using-css/

There are 2 ways using css for fix-header

### 1. Table-layout: fixed
```css
.fixed_header{
  width: 400px;
  table-layout: fixed;
  border-collapse: collapse;
}
.fixed_header tbody{
  display:block;
  width: 100%;
  overflow: auto;
  height: 100px;
}
```

### 2. dksplay flex on table and tr. 
```css
table.flex-table {
  display: flex;
  flex-direction: column;
  height: 100%;
}
table.flex-table thead,
table.flex-table tbody {
  display: block;
}
table.flex-table thead {
  margin-right: 0px;
}
table.flex-table tbody {
  flex: 1;
  overflow-y: scroll;
}
table.flex-table tr {
  width: 100%;
  display: flex;
}
table.flex-table tr td,
table.flex-table tr th {
  display: block;
  flex: 1;
}
table.flex-widths.flex-table-aligned thead > tr {
  overflow-y: scroll;
  overflow-x: hidden;
}
```

### Things to consider

* Data format
* Number of data to render before pagination or infinite pagination
* High order component (break down to render header, row, and table)
