import InputError from '@/components/InputError';
import { Button } from '@/components/ui/Button';
import { Dialog, DialogClose, DialogContent, DialogTitle } from '@/components/ui/Dialog';
import { Input } from '@/components/ui/Input';
import { useForm } from '@inertiajs/react';
import axios from 'axios';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler, useEffect } from 'react';

type CategoryForm = {
    name: string;
    image?: File | null;
    image_url?: string | null;
};

export default function EditCategory({
    categoryId,
    openModal,
    setOpenModal,
}: {
    categoryId: number;
    openModal: boolean;
    setOpenModal: (open: boolean) => void;
}) {
    const { data, setData, put, processing, errors, progress, reset } = useForm<CategoryForm>({
        name: '',
        image: null,
    });

    useEffect(() => {
        axios
            .get(`categories/${categoryId}`)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [categoryId, setData]);

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        put(route('categories.update', { id: categoryId }), {
            onFinish: () => reset('name', 'image'),
            onSuccess: () => setOpenModal(false),
            onError: () => {
                // Handle error
            },
        });
    };

    return (
        <div className="flex w-full flex-initial gap-4 overflow-x-auto rounded-xl p-4">
            <Dialog open={openModal} onOpenChange={setOpenModal}>
                <DialogContent className="bg-white">
                    <DialogTitle>Edit category</DialogTitle>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                value={data.name}
                                placeholder="Category name"
                                className="mb-4 rounded-md border"
                                autoComplete="off"
                                required
                                onChange={(e) => setData('name', e.target.value)}
                            />
                            <InputError message={errors.name} />
                        </div>
                        <div>
                            <Input
                                type="file"
                                accept=".jpeg, .jpg, .png"
                                id="categoryImage"
                                placeholder="Upload image"
                                className="mb-4 rounded-md border"
                                onChange={(e) => {
                                    setData('image', e.target.files?.[0] ?? null);
                                }}
                            />
                            {progress && (
                                <progress value={progress.percentage} max="100">
                                    {progress.percentage}%
                                </progress>
                            )}
                            <InputError message={errors.image} />
                        </div>
                        <div className="mb-3 flex justify-center">
                            {data.image_url && <img src={data.image_url} alt="Preview" className="w-32 rounded" />}
                        </div>
                        <div className="flex justify-between">
                            <DialogClose asChild>
                                <Button type="button" className="rounded-md bg-gray-400 px-4 py-2 font-bold text-white hover:bg-gray-500">
                                    Cancel
                                </Button>
                            </DialogClose>
                            <Button
                                type="submit"
                                className="rounded-md bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
                                disabled={processing}
                            >
                                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                Save Changes
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
