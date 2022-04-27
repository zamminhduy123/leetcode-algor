## Thought Process

### First thought

I read them hint and tried to think this in a graph problem

First, i tried to bring the pairs list back to "adjacent list" cause it will be much more easy to work with that. Here's how i did it

	for (let i = 0 ; i < pairs.length; i++){
        	if (pairs[i][0] != pairs[i][1]){
            	ajdList[pairs[i][0]] = [...ajdList[pairs[i][0]], pairs[i][1]]
            	ajdList[pairs[i][1]] = [...ajdList[pairs[i][1]], pairs[i][0]]
        	}
    	}

Then i use **adjacent list** to group all of the node that link together. This code is pretty easy to understand but hard to look at. Basicly i just tried to **DFS** into the **adjacent list** i got above then i make a group from that

	const internalLink = [];
    	const check = [];
    	check.length = s.length;
    	check.fill(false);
    
    	let index = 0;
    	const makeInternalLink = (id) => {
        	for (let i = 0 ; i < ajdList[id].length; i++) {
            		if (!check[ajdList[id][i]]){
                		check[ajdList[id][i]] = true;
                		internalLink[index].push(parseInt(ajdList[id][i]));
                		makeInternalLink(ajdList[id][i]);
            		}
        	}
    	}	
    
    	for (let i = 0; i < ajdList.length;i++){
        	if (!check[i]){
            	check[i] = true;
            	internalLink[index] = [parseInt(i)];
            	makeInternalLink(i);
            	index++;
        	}
    	}

Then i tried to sort the string **in_place** with the group i got, so i cannot use the efficient sort algorithm  default of javascript which is Array.sort(). So i tried to sort with interchange sort. And it got Complexity of O(n^2) which exceed the time limit

### Peeking Discussion (Not really helpful)

After peeking into discussion, i saw people using the tag **Union Find** so i googled it and watch an explaination about it. So it's just a different way to know which one is in the same group.

So it's not really helpful

So i tried to use the Array.sort() from js. which mean i seprated the string into a temporary string then sort it by tranfer it to Array.

	const strArr = Array.from(s);
    
    	for (let i = 0 ; i < internalLink.length; i++){
        	internalLink[i].sort((a,b) => a - b);
        	let temp = [];
		//get the Array of string in the group
        	for (let j = 0 ; j < internalLink[i].length; j++){
            		temp.push(strArr[internalLink[i][j]]);
        	}
		//sort with efficient sort algorithm
        	temp.sort();
		//modify the original one
        	let k = 0;
        	for (let j = 0 ; j < internalLink[i].length; j++){
            		strArr[internalLink[i][j]] = temp[k++];
        	}
    	}
    	return strArr.join('');

By this way i can use the efficient sort and it solve the problem.

	