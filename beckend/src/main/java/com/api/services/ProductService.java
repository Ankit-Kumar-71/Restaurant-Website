package com.api.services;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.web.multipart.MultipartFile;

import com.api.dto.ProductDTO;
import com.api.entities.Product;

public interface ProductService {
    
    public String saveProduct(ProductDTO dto, MultipartFile image)throws IOException;

    public List<Product> getAllProducts();

    public Product updateProduct(Long id, ProductDTO dto, MultipartFile image)throws IOException;

    public Optional<Product> getProductById(Long id);

    public void deleteProduct(Long id);
}
