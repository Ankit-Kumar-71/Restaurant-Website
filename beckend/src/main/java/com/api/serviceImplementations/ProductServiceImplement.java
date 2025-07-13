package com.api.serviceImplementations;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.api.dto.ProductDTO;
import com.api.entities.Product;
import com.api.repository.ProductRepository;
import com.api.services.ProductService;

@Service
public class ProductServiceImplement implements ProductService {

    private final FileStorageUtil fileStorageUtil;

    private final ProductRepository productRepository;

    public ProductServiceImplement(ProductRepository productRepository, FileStorageUtil fileStorageUtil) {
        this.productRepository = productRepository;
        this.fileStorageUtil = fileStorageUtil;
    }

    public String saveProduct(ProductDTO dto, MultipartFile image) throws IOException {
        String imagePath = fileStorageUtil.store(image);
        Product product = new Product();
        product.setName(dto.getName());
        product.setCategory(dto.getCategory());
        product.setPrice(dto.getPrice());
        product.setDescription(dto.getDescription());
        product.setImage(imagePath);
        productRepository.save(product);
        return "Product Created Successfully";
    }

    public Product updateProduct(Long id, ProductDTO dto, MultipartFile imageFile) throws IOException {
        Product existing = productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        existing.setName(dto.getName());
        existing.setCategory(dto.getCategory());
        existing.setPrice(dto.getPrice());
        existing.setDescription(dto.getDescription());

        if (imageFile != null && !imageFile.isEmpty()) {
            String imagePath = fileStorageUtil.store(imageFile);
            existing.setImage(imagePath);
        }

        return productRepository.save(existing);
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Optional<Product> getProductById(Long id) {
        return productRepository.findById(id);
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

}
