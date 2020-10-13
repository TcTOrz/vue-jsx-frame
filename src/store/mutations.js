import jsonData from '@/assets/routeDirec.json'
export const STORAGE_KEY = state => state.STORAGE_KEY

export const handleSelect = (state, payload) => {
  let path = payload.indexPath
  let name = path[path.length - 1]
  let targetName = getTabName(name)
  let tabs = state.tabs
  let isExist = _.findIndex(tabs, function(o) {
    return o.name === name
  })
  if (isExist === -1) {
    // add tabs
    addTab(state, targetName, name)
  }
  state.activeIndex = state.tabsValue = name
  // console.log(name, targetName, tabs)
}

const getTabName = (name) => {
  let arr = name.slice(1).split('/')
  if (arr.length > 1) {
    return jsonData[arr[0]].children[arr[1]].name
  } else {
    return jsonData[arr[0]].name
  }
}

export const addTab = (state, tab, url) => {
  // console.log(tab, url)
  // url = url.slice(1)
  // let arr = tab.split('/')
  // let name = arr[arr.length - 1]
  // if (!_.find(state.tabs, function(o) {
  //   return o.name === url
  // })) {
  let newTab = { title: tab, name: url, content: '' }
  state.tabs.push(newTab)
  state.tabsValue = tab;
  // }
  
}

export const removeTab = (state, payload) => {
  let targetName = payload.targetName
  let tabs = state.tabs
  let activeName = state.tabsValue
  if (activeName === targetName) {
    tabs.forEach((tab, index) => {
      if (tab.name === targetName) {
        let nextTab = tabs[index + 1] || tabs[index - 1];
        if (nextTab) {
          activeName = nextTab.name
          state.activeIndex = state.tabsValue = activeName
        }
      }
    });
  }
    
  state.tabsValue = activeName;
  state.tabs = tabs.filter(tab => tab.name !== targetName);
}