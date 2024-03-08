import { createRouter, createWebHistory } from 'vue-router'
import PaginaInicial from "../components/PaginaInicial.vue"
import ClienteFormulario from '@/components/ClienteFormulario.vue'
import ProdutoListar from '@/components/ProdutosListar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: PaginaInicial
    },
    {
      path: '/cliente/novo',
      component: ClienteFormulario
    },
    {
      path: '/produto/listar',
      component: ProdutoListar
    },
  ]
})

export default router
