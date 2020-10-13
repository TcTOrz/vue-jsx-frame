<script>
import { mapGetters, /* mapActions */ } from 'vuex'
import jsonData from '@/assets/routeDirec.json'
export default {
  name: 'menuComponent',
  // functional: true,
  render() {
    return (<el-menu mode="horizontal" 
        background-color="#69c"
        text-color="#fff"
        onSelect={this.handleSelect}
        active-text-color="#ffa"
        default-active={this.activeIndex}
        router={true}>
        {
          Object.values(jsonData).map(val => {
            let url = '/home/'+val.url,
                name = val.name
            if (!('children' in val)) {
              return <el-menu-item index={url}>{name}</el-menu-item>
            } else {
              return (<el-submenu index={url}><template slot="title">{name}</template>{Object.values(val.children).map(v => {
                let url = '/home/'+v.url,
                  name = v.name
                return <el-menu-item index={url}>{name}</el-menu-item>
              })}</el-submenu>)
            }
          })
        }
      </el-menu>)
  },
  computed: mapGetters([
    'activeIndex'
  ]),
  methods: {
    handleSelect(index, indexPath) {
      this.$store.dispatch({ type: 'handleSelect', index, indexPath})
    },
  }
}
</script>