"use strict";

class ManageBrew {
	static async pInitialise () {
		return ManageBrew.pRender();
	}

	static async pRender () {
		const manager = new ManageBrewUi({brewUtil: BrewUtil2});
		return manager.pRender($(`#brewmanager`).empty());
	}
}

window.addEventListener("load", async () => {
	await PrereleaseUtil.pInit();
	await BrewUtil2.pInit();
	ExcludeUtil.pInitialise().then(null); // don't await, as this is only used for search
	await ManageBrew.pInitialise();

	window.dispatchEvent(new Event("toolsLoaded"));
});
