import { shallowMount } from '@vue/test-utils'
import CartItem from '@/components/CartItem.vue'

test('atributos do produto são exibidos', () => {

  const propsData = {
    product: {
      imageurl: 'http://localhost:3000/assets/images/botina1M.jpg',
      name: 'nome',
    },
    productQtd: 4,
  }

  const wrapper = shallowMount(CartItem, { propsData });

  const productName = wrapper.findComponent('#product-name');
  const productQtd = wrapper.findComponent('#product-qtd');
  const productImg = wrapper.findComponent('#product-img');

  expect(productName.text()).toBe(propsData.product.name);
  expect(productQtd.text()).toBe(`Qtd: ${propsData.productQtd}`);
  expect(productImg.attributes().src).toBe(propsData.product.imageurl);
})