import DocumentationNav from '@/components/docs/DocumentationNav'
import utilsDocRoutes from './utilsDocRoutes'
import UtilsDocView from './UtilsDocView'

const UtilsDoc = () => {
    return (
        <div className="lg:flex h-full gap-8">
            <div className="lg:w-[280px] py-2 lg-py-0 px-4 mb-4 border border-gray-200 dark:border-gray-700 rounded-md lg:border-0">
                <DocumentationNav
                    routes={utilsDocRoutes}
                    basePath="/guide/utils-doc/"
                />
            </div>
            <div className="w-full">
                <UtilsDocView />
            </div>
        </div>
    )
}

export default UtilsDoc
