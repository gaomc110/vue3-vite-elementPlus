<template>

  <router-view></router-view>

</template>

<script>
  import { defineComponent, ref, watch,computed,reactive,toRefs } from 'vue'
  import { useStore } from 'vuex'
  import locale from 'element-plus/lib/locale/lang/zh-cn'
  import { ElConfigProvider } from 'element-plus'
  import { changeThemeDefaultColor } from '@/utils/changeThemeColor'
  import theme from '@/config/theme'
  export default {
    components: {
     // ElConfigProvider
    },
    setup(){

      const store = useStore();

      changeThemeDefaultColor()

      //const setting = computed(()=> store.getters['permission/getSetting'])

      const data = reactive({
        setting: computed(()=> store.getters['permission/getSetting'])
      })
      console.log(data)
      /*console.log(data)
      const refData = toRefs(data)
      console.log(refData)*/
      // 重新获取主题色
      const f = () => {
        let themeArray = theme()
        return data.setting.theme >= themeArray.length ? themeArray[0] : themeArray[data.setting.theme]
      }
      let themeStyle = ref(f())
      watch(() => data.setting.theme, () => themeStyle.value = f())
      watch(() => data.setting.color.primary, () => themeStyle.value = f())

      return {
        locale,
        themeStyle,
        //setting
        ...toRefs(data)
      }

    }
  }

</script>
<style lang="scss">
  #app{
    height: 100%;
  /*> div{
    height: 100%;
  }*/
  }
</style>
<style lang="scss">

  .layout-sidebar-sidesetting > i {
    background-color: v-bind('themeStyle.sidebarActiveBg');
    color: v-bind('themeStyle.sidebarColor');
  }

  .layout-sidebar {
    background-color: v-bind('themeStyle.sidebarBg');

    .layout-sidebar-logo {
      background-color: v-bind('themeStyle.logoBg || themeStyle.sidebarBg');
      color: v-bind('themeStyle.logoColor || themeStyle.sidebarColor');
    }

    .el-menu {
      background-color: v-bind('themeStyle.sidebarBg');
      border-right: 0;

      .el-menu {
        background-color: v-bind('themeStyle.sidebarChildrenBg');
      }
    }

    .el-sub-menu__title {
      color: v-bind('themeStyle.sidebarColor');
    }

    .el-menu-item {
      color: v-bind('themeStyle.sidebarColor');
    }

    .el-menu-item:focus,
    .el-menu-item:hover,
    .el-sub-menu__title:hover {
      background-color: transparent;
      color: v-bind('themeStyle.sidebarActiveColor');
    }

    .el-menu-item-group__title {
      padding: 0;
    }

    .el-menu-item.is-active {
      background-color: v-bind('themeStyle.sidebarActiveBg');
      color: v-bind('themeStyle.sidebarActiveColor');
      border-right: 3px solid v-bind('themeStyle.sidebarActiveBorderRightBg');
    }

    .el-sub-menu.is-active > .el-sub-menu__title,
    .el-sub-menu.is-active > .el-sub-menu__title > i {
      color: v-bind('themeStyle.sidebarActiveColor');
    }
  }

  .layout-main-navbar {
    background-color: v-bind('setting.mode === "vertical" || setting.isPhone ? themeStyle.navbarBg : themeStyle.sidebarBg');
    color: v-bind('setting.mode === "vertical" || setting.isPhone ? themeStyle.navbarColor : themeStyle.sidebarColor');

    .el-breadcrumb .el-breadcrumb__inner,
    .el-breadcrumb .el-breadcrumb__separator,
    .el-breadcrumb .el-breadcrumb__inner:hover,
    .el-breadcrumb .el-breadcrumb__separator:hover,
    .el-dropdown {
      color: v-bind('themeStyle.navbarColor');
    }

    .layout-sidebar-menubar {
      .el-menu {
        background-color: v-bind('themeStyle.sidebarBg');
        border-right: 0;
      }

      .el-menu--horizontal {
        & > .el-menu-item {
          color: v-bind('themeStyle.sidebarColor');
        }

        & > .el-sub-menu .el-sub-menu__title {
          color: v-bind('themeStyle.sidebarColor');
        }

        .el-menu-item:not(.is-disabled):focus,
        .el-menu-item:not(.is-disabled):hover {
          background-color: v-bind('themeStyle.sidebarActiveBg');
          color: v-bind('themeStyle.sidebarActiveColor');
        }

        & > .el-sub-menu .el-sub-menu__title:hover {
          background-color: v-bind('themeStyle.sidebarActiveBg');
          color: v-bind('themeStyle.sidebarActiveColor');
        }

        & > .el-menu-item-group__title {
          padding: 0;
        }

        & > .el-menu-item.is-active {
          background-color: v-bind('themeStyle.sidebarActiveBg');
          color: v-bind('themeStyle.sidebarActiveColor') !important;
          border-right: 3px solid v-bind('themeStyle.sidebarActiveBorderRightBg');
        }

        & > .el-sub-menu.is-active > .el-sub-menu__title,
        & > .el-sub-menu.is-active > .el-sub-menu__title > i {
          color: v-bind('themeStyle.sidebarActiveColor');
        }
      }
    }
  }

 /* .layout-main-tags {
    background-color: v-bind(themeStyle.tagsbg);
    color: v-bind('themeStyle.tagsColor');
     .layout-tags-active {
       background-color: v-bind(themeStyle.tagsActiveBg);
       color: v-bind(themeStyle.tagsActiveColor);
     }
  }*/


  .layout-main-content {
    background-color: v-bind('themeStyle.mainBg');
  }
</style>
