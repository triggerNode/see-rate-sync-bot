import { useState } from 'react'
import Button from '@/components/ui/Button'
import Dialog from '@/components/ui/Dialog'
import NewProjectForm from './NewProjectForm'
import { useProjectListStore } from '../store/projectListStore'
import { apiGetProjectMembers } from '@/services/ProjectService'
import useSWR from 'swr'
import type { GetProjectMembersResponse } from '../types'

const ProjectListHeader = () => {
    const [dialogOpen, setDialogOpen] = useState(false)

    const { setMembers } = useProjectListStore()

    useSWR(
        ['/api/projects/members'],
        () => apiGetProjectMembers<GetProjectMembersResponse>(),
        {
            revalidateOnFocus: false,
            revalidateIfStale: false,
            revalidateOnReconnect: false,
            onSuccess: (data) => {
                const members = data?.allMembers.map((item) => ({
                    value: item.id,
                    label: item.name,
                    img: item.img,
                }))
                setMembers(members)
            },
        },
    )

    return (
        <>
            <div className="flex items-center justify-between gap-4">
                <h3>Game Portfolio</h3>
                <div>
                    <Button variant="solid" onClick={() => setDialogOpen(true)}>
                        Add New Game
                    </Button>
                </div>
            </div>
            <Dialog isOpen={dialogOpen} onClose={() => setDialogOpen(false)}>
                <h4>Add new project</h4>
                <div className="mt-4">
                    <NewProjectForm onClose={() => setDialogOpen(false)} />
                </div>
            </Dialog>
        </>
    )
}

export default ProjectListHeader
