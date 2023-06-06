import dynamic from 'next/dynamic'

const lazy = async (page: string) => await import(`@/app/(pages)/blog/(posts)/${page}/page`)
const lazyDynamic = (page: string) => dynamic(() => import(`@/app/(pages)/blog/(posts)/${page}/page`).then((module) => module.default), { loading: () => <>loading...</> })
function areEqual(array1: string[], array2: string[]) {
  array1 = array1.sort()
  array2 = array2.sort()
  return JSON.stringify(array1) === JSON.stringify(array2);
}

export default async function SelectedCategoriesBlog({ params }: { params: { categories: string, pages: string } }) {
  const { categories }: { categories: string[] } = await lazy(params.pages)
  const Page = lazyDynamic(params.pages)
  return (
    <>
      {areEqual(params.categories.split('%2B'), categories) && (
        <>
          <Page />
        </>
      )}
    </>
  )
}