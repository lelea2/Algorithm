/*
** The File Tree Data will have the following shape: 
** type FileTreeData = { 
**   name: String,
**   type: "dir" | "file",
**   children?: Array<FileTreeData>
** }
*/

function sortData(data) {   
  function mapChildren(arr) {
     sortArr(arr);
     return arr.map((item) => {
       if (item.children) {
         return mapChildren(item.children);
       }
     });
  };
  
  function sortArr(arr) {
    return arr.sort((a, b) => a.name > b.name);
  }
 

  const { children } = data; // first children from the root
  mapChildren(children);
  return data;
}

// {"name":"root","type":"dir","children":[{"name":"bar","type":"dir","children":[{"name":"_spicy","type":"file"},{"name":"bar","type":"file"},{"name":"boo","type":"file"}]},{"name":"baz","type":"dir","children":[{"name":"bower","type":"dir","children":[{"name":"1-nancy","type":"file"},{"name":"23450-a","type":"file"},{"name":"23450-b","type":"file"},{"name":"nancy","type":"file"},{"name":"zamir","type":"file"}]},{"name":"corge","type":"file"},{"name":"whittle","type":"file"}]},{"name":"grault","type":"file"},{"name":"quux","type":"file"}]};
// console.log(JSON.stringify(sortData(data)));

module.exports = sortData;

const data = {
	name: "root",
	type: "dir",
	children: [
		{
			name: "quux",
			type: "file"
		},
		{
			name: "grault",
			type: "file"
		},
		{
			name: "baz",
			type: "dir",
    	children: [
				{
					name: "whittle",
					type: "file"
				},
      	{
					name: "corge",
					type: "file"
				},
				{
					name: "bower",
					type: "dir",
					children: [
						{ 
							name: "zamir",
							type: "file",
						},
						{ 
							name: "nancy",
							type: "file",
						},
						{ 
							name: "1-nancy",
							type: "file",
						},
						{ 
							name: "23450-a",
							type: "file",
						},
						{ 
							name: "23450-b",
							type: "file",
						}
					]
      	}
    	]
  	},
  	{
			name: "bar",
			type: "dir",
			children: [
				{
					name: "bar",
					type: "file"
      	},
      	{
					name: "boo",
					type: "file"
				},
				{
					name: "_spicy",
					type: "file"
      	}
    	]
  	}
	]
};