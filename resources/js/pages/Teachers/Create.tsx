import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AppLayout from "@/layouts/app-layout";
import { type BreadcrumbItem } from "@/types";
import { Head, router } from "@inertiajs/react";
import { SubmitHandler, useForm } from "react-hook-form";
// import { FormInput } from "lucide-react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create a New Teacher',
        href: '/products/create',
    },
];

type FormValues = {
    teacher_id: string;
    fullName: string;
    gender: string;
    marital: string;
    email: string;
    phone: string;
    address: string;
    dob: string;
    religion: string;
    nationality: string;
    education: string;
    qualification: string;
    experience: string;
};


export default function Index() {
    const form = useForm<FormValues>({
        defaultValues: {
            teacher_id: '',
            fullName: '',
            gender: '',
            marital: '',
            email: '',
            phone: '',
            address: '',
            dob: '',
            religion: '',
            nationality: '',
            education: '',
            qualification: '',
            experience: ''
        }
        

    });

    const handleSubmit: SubmitHandler<FormValues> = data => {
        // Use Inertia's router to post data
        router.post('/teachers', data);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create a New Product" />
            <div className='w-8/12 p-4'>
               <Form {...form}>
                   <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                        <div className="grid gap-2">
                            <FormField
                                name="teacher_ID"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Teacher ID</FormLabel>
                                        <input
                                            type="text"
                                            className="mt-1 block w-full"
                                            autoComplete="teacherID"
                                            placeholder="eg. TNT120/70"
                                            {...field}
                                        />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="grid gap-2">
                            <FormField
                                name="fullName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full Name</FormLabel>
                                        <input
                                            type="text"
                                            className="mt-1 block w-full"
                                            autoComplete="fullName"
                                            placeholder="Juma Alex Mkwabi"
                                            {...field}
                                        />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="grid grid-col-12 gap-2">
                            <div className="col-span-6">
                                <FormField
                                    name="gender"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Gender</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select Gender" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="male">Male</SelectItem>
                                                    <SelectItem value="female">Female</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="col-span-6">
                                <FormField
                                    name="marital"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Marital Status</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a verified email to display" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="single">Single</SelectItem>
                                                    <SelectItem value="married">Married</SelectItem>
                                                    <SelectItem value="divorced">Divorced</SelectItem>
                                                    <SelectItem value="widowed">Widowed</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <div className="grid grid-col-12 gap-2">
                            <div className="col-span-6">
                                <FormField
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email Address</FormLabel>
                                            <input
                                                type="email"
                                                className="mt-1 block w-full"
                                                autoComplete="email address"
                                                placeholder="example@gmail.com"
                                                {...field}
                                            />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="col-span-6">
                                <FormField
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Phone No.</FormLabel>
                                            <input
                                                type="text"
                                                className="mt-1 block w-full"
                                                autoComplete="physical address"
                                                placeholder="(xxx) xxx xxx xxx"
                                                {...field}
                                            />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <div className="grid gap-2">
                            <FormField
                                name="address"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Physical Address</FormLabel>
                                        <input
                                            type="text"
                                            className="mt-1 block w-full"
                                            autoComplete="physical address"
                                            placeholder="Kiloko Street, House 190"
                                            {...field}
                                        />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="flex items-center gap-4">
                            <Button type="submit">Save</Button>
                        </div>
                    </form>
               </Form>
            </div>
        </AppLayout>
    );

}