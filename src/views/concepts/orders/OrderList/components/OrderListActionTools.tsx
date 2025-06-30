import Button from '@/components/ui/Button'
import { TbCloudDownload, TbPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router'
import useOrderlist from '../hooks/useOrderlist'
import { CSVLink } from 'react-csv'

const OrderListActionTools = () => {
    const navigate = useNavigate()

    const { orderList } = useOrderlist()

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <CSVLink
                className="w-full"
                filename="customerList.csv"
                data={orderList}
            >
                <Button
                    icon={<TbCloudDownload className="text-xl" />}
                    className="w-full"
                >
                    Download
                </Button>
            </CSVLink>
            <Button
                variant="solid"
                icon={<TbPlus className="text-xl" />}
                onClick={() => navigate('/concepts/orders/order-create')}
            >
                Add new
            </Button>
        </div>
    )
}

export default OrderListActionTools
