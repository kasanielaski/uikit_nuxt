export const state = () => ({
    isSidebarVisible: false
});

export const actions = {
    toggleSidebar({ commit }) {
        commit('toggleSidebar');
    }
};

export const mutations = {
    toggleSidebar({ isSidebarVisible }) {
        isSidebarVisible = !isSidebarVisible;
    }
};

export const getters = {
    isSidebarVisible({ isSidebarVisible }) {
        return isSidebarVisible;
    }
};
