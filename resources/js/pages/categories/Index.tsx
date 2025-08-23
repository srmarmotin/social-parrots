import { Table } from '@/components/ui/Table';
import AppLayout from '@/layouts/AppLayout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Pencil } from 'lucide-react';
import { useState } from 'react';
import AddCategory from './AddCategory';
import EditCategory from './EditCategory';

type Categories = {
    id: number;
    name: string;
    description: string;
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Categories',
        href: '/categories',
    },
];

export default function Categories({ categories }: { categories: Categories[] }) {
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
    const [openEditModal, setOpenEditModal] = useState(false);

    const handleEditClick = (id: number) => {
        setSelectedCategoryId(id);
        setOpenEditModal(true);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Categories" />
            <AddCategory />
            {categories.length > 0 ? (
                <div className="flex flex-initial flex-col gap-4 overflow-x-auto rounded-xl p-4">
                    <Table
                        columns={[
                            { key: 'id', value: 'id', label: 'Id' },
                            { key: 'name', value: 'name', label: 'Name' },
                            {
                                key: 'image',
                                value: 'thumbnail_url',
                                label: 'Image',
                                render: (value) => <img src={value} alt="Thumbnail" className="h-12 w-12 rounded" />,
                            },
                            {
                                key: 'edit',
                                value: 'id',
                                label: 'Edit',
                                render: (value) => (
                                    <button onClick={() => handleEditClick(value)}>
                                        <Pencil className="h-5 w-5 cursor-pointer" />
                                    </button>
                                ),
                            },
                        ]}
                        data={categories}
                    />
                </div>
            ) : (
                <div className="p-4">
                    <p>Nothing to see here!</p>
                </div>
            )}
            {selectedCategoryId && <EditCategory openModal={openEditModal} setOpenModal={setOpenEditModal} categoryId={selectedCategoryId} />}
        </AppLayout>
    );
}
