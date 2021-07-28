// Create map, filter with reduce

tags.filter((tag) => tag.score > .5).map((tag) => tag.name);
tags.reduce((acc, tag) => { if (tag.score > .5) acc.push(tag.name); return acc }, []);
