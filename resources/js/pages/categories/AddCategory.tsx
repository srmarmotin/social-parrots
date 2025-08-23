import InputError from '@/components/InputError';
import { Button } from '@/components/ui/Button';
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/Dialog';
import { Input } from '@/components/ui/Input';
import { useForm } from '@inertiajs/react';
import { CirclePlus, LoaderCircle } from 'lucide-react';
import { FormEventHandler, useState } from 'react';

type CategoryForm = {
    name: string;
    image?: File | null;
};

export default function AddCategory() {
    const [open, setOpen] = useState(false);
    const { data, setData, post, processing, errors, progress, reset } = useForm<CategoryForm>({
        name: '',
        image: null,
    });

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('categories.store'), {
            onFinish: () => reset('name', 'image'),
            onSuccess: () => setOpen(false),
            onError: () => {
                // Handle error
            },
        });
    };

    return (
        <div className="flex w-full flex-initial gap-4 overflow-x-auto rounded-xl p-4">
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button type="button" className="w-40 rounded-md bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600">
                        <CirclePlus />
                        Add Category
                    </Button>
                </DialogTrigger>
                <DialogContent className="bg-white">
                    <DialogTitle>Add new category</DialogTitle>
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
                                Add Category
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
