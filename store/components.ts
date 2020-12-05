import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

interface Component {
  path: string
  title: string
  slug: string
}

@Module({
  name: 'Components',
  stateFactory: true,
  namespaced: true,
})
class Components extends VuexModule {
  navItems: Array<Object> = []

  @Mutation
  loadComponents(components: Array<Component>) {
    this.navItems = components.map(
      (component: Component): Component => {
        return {
          path: component.path,
          title: component.title,
          slug: component.slug,
        }
      }
    )
  }
}

export default Components
