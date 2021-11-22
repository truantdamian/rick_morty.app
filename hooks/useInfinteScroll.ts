import { MutableRefObject, useEffect, useState, useRef } from 'react'

const useInfiniteScroll = (refList: MutableRefObject<any>) => {
  const [page, setPage] = useState<number>(1)
  const refLastItems = useRef(0)

  const options = {
    root: null,
    rootMargin: '120px',
    threshold: 0.5,
  }

  const onInterceptLast = (entries, observer) => {
    if (entries[0].isIntersecting) {
      setPage(page + 1)
    }
  }

  useEffect(() => {
    if (!refList.current || !refList.current.lastElementChild) {
      return
    }
    const observerLast = new IntersectionObserver(onInterceptLast, options)
    if (refLastItems.current !== refList.current.lastElementChild.id) {
      refLastItems.current = refList.current.lastElementChild.id
      observerLast.observe(refList.current.lastElementChild)
    } else {
      observerLast.disconnect()
    }
  }, [refList.current])

  return [page, setPage]
}

export default useInfiniteScroll
