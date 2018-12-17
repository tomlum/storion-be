function stringCompare(a, b) {
	return a.localeCompare(b)
}

function mod(n, m) {
	return (n % m + m) % m
}

function arrayRemove(array, value) {
	array.splice(array.indexOf(value), 1)
}

function tagInvalid(tag){
	return tag.length <= 0 || tag.includes("`") 
}

module.exports = {
	tag: {
		invalid: tagInvalid,
	},
	string: {
		compare: stringCompare
	},
	math: {
		mod
	},
	array: {
		remove: arrayRemove
	}
}
