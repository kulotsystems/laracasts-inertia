import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import NProgress from 'nprogress';
import { router } from '@inertiajs/vue3';


NProgress.configure({
    showSpinner: false,
    template: '<div class="bar" role="bar" style="background: red"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
});
router.on('start', ()  => NProgress.start());
router.on('finish', () => NProgress.done());


createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        return pages[`./Pages/${name}.vue`]
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el)
    },
    progress: false
});
