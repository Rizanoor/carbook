<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string'],
            'categories_id' => ['required', 'string'],
            'transmission' => ['required', 'string'],
            'seats' => ['required', 'string'],
            'fuel' => ['required', 'string'],
            'price' => ['required'],
            'time' => ['required', 'string'],
            // 'photos' => ['required', 'string'],
            'long_description' => ['required', 'string'],
        ];
    }
}
