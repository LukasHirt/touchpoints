import { Context } from '@nuxt/types/app'

export default async function (context: Context): Promise<void> {
  const components = await context.$content('components').fetch()

  context.store.commit('components/loadComponents', components)
}
