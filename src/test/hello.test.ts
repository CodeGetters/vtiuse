import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import NotifyList from "@/components/NotifyList.vue";

describe("NotifyList", () => {
  it("List 长度为 0", () => {
    const wrapper = shallowMount(NotifyList, {
      props: {
        list: [],
      },
    });
    expect(wrapper.find("el-empty").exists()).toBe(true);
  });
  it("List 长度不为 0", () => {
    const wrapper = shallowMount(NotifyList, {
      props: {
        list: [
          {
            title: "",
          },
        ],
      },
    });
    expect(wrapper.find("el-empty").exists()).toBe(false);
  });
});
