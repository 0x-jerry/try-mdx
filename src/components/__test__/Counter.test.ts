import { mount } from '@vue/test-utils'
import Counter from '../Counter.vue'

test('mount component', async () => {
  expect(Counter).toBeTruthy()

  const wrapper = mount(Counter, {
    props: {
      modelValue: 4,
    },
  })

  expect(wrapper.find('span').text()).toContain('4')

  const buttons = wrapper.findAll('button')

  // +
  await buttons[0].trigger('click')

  // -
  await buttons[1].trigger('click')

  expect(wrapper.emitted('update:modelValue')).toEqual([[5], [3]])
})
