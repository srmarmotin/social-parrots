import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Table } from '@/components/ui/Table';
import AppLayout from '@/layouts/AppLayout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Categories',
        href: '/categories',
    },
];

export default function Categories({ categories }) {
    const { data, setData, post, processing, reset } = useForm<Required<{ category: string }>>({
        category: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('categories.store'), {
            onFinish: () => reset('category'),
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Categories" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <form className="flex flex-col gap-6" onSubmit={submit}>
                    <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                        <Input
                            type="text"
                            id="category"
                            placeholder="Add category"
                            required
                            value={data.category}
                            onChange={(e) => setData('category', e.target.value)}
                            className="rounded-md border"
                            autoComplete="off"
                        />
                        <Button
                            type="submit"
                            className="w-6/12 rounded-md bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
                            disabled={processing}
                        >
                            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                            Add Category
                        </Button>
                    </div>
                </form>
            </div>
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Table
                    columns={[
                        { key: 'name', label: 'Name' },
                        { key: 'description', label: 'Description' },
                    ]}
                    data={categories}
                />
            </div>
        </AppLayout>
    );
}
