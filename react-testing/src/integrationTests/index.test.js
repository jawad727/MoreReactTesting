import moxios from "moxios" // tests axios API reqs
import { testStore } from "../components/reusables/resuableFunctions"
import { fetchPosts } from "../actions/index"

describe("fetchposts action", () => {

    beforeEach(() => {
        moxios.install() // install so when we hit axios it doesn't do to the internet and instead tests our expectedState variable
    })

    afterEach(() => {
        moxios.uninstall()
    })

    test("Store is updated correctly", () => {

        const expectedState = [{
            title: "Example title 1",
            body: "Some text"  },
        {
            title: "Example title 2",
            body: "Some text"  },
          {
            title: "Example title 3",
            body: "Some text"  }]

          const store = testStore()

          moxios.wait(() => {
              const request = moxios.requests.mostRecent();
              request.respondWith({
                  status: 200,
                  response: expectedState
              })
          })

          return store.dispatch(fetchPosts())
          .then(() => {
              const newState = store.getState();
              expect(newState.posts).toBe(expectedState)
          })

    })

})