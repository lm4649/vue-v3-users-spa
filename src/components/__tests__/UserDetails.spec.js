import { shallowMount } from "@vue/test-utils";
import UsersDetails from "../UserDetails.vue";
import sourceData from "../../data.json";
import { describe, it, expect, beforeEach } from "vitest";

describe("UserDetails.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(UsersDetails, {
      propsData: {
        users: sourceData.users,
        id: 1,
      },
    });
  });
  it("should render the correct user details", () => {
    expect(wrapper.find("img").attributes().src).toBe(
      `/images/${sourceData.users[0].picture}`
    );
    expect(wrapper.find("img").attributes().alt).toBe(sourceData.users[0].name);
    expect(wrapper.find("h1").text()).toBe(sourceData.users[0].name);
    expect(wrapper.find("p").text()).toBe(sourceData.users[0].bio);
  });

  it('should render "User not found" if user id is not found', async () => {
    wrapper.setProps({ id: 999 });
    await wrapper.vm.$nextTick();
    expect(wrapper.find("p").text()).toBe("User not found");
  });
});
