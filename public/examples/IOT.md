# Getting Started with IoT Security

---

## What is IoT?

- Internet of Things (IoT) = network of connected devices
- Examples:
  - Smart lights
  - Wearables
  - Connected cars

```bash
# Example: Scan IoT devices on a local network
nmap -p 1-65535 192.168.1.0/24
```

---

## Why IoT Security Matters

- Billions of devices = billions of entry points
- Sensitive user data at risk
- Weak IoT security → gateway to larger attacks

```python
# Example: Simple MQTT connection
import paho.mqtt.client as mqtt

client = mqtt.Client()
client.connect("broker.hivemq.com", 1883, 60)
client.publish("iot/device", "Hello, world!")
```

---

## Common Threats

---

### 1. Weak Authentication

- Default passwords left unchanged
- Easily brute-forced

```bash
# Hydra brute force example
hydra -l admin -P passwords.txt 192.168.1.10 http-get
```

---

### 2. Unencrypted Communication

- Data sent in plain text
- Easy for attackers to sniff traffic

```bash
# Wireshark filter to sniff HTTP traffic
tcp.port == 80 && http
```

---

### 3. API Vulnerabilities

- Poorly designed endpoints
- Injection and data leaks

```javascript
// Example of insecure API (no validation)
app.post("/login", (req, res) => {
  const query = "SELECT * FROM users WHERE name = '" + req.body.name + "'";
  db.query(query, (err, result) => {
    res.send(result);
  });
});
```

---

## Best Practices

---

### Device Security

- Enforce strong passwords
- Firmware updates
- Secure boot

```bash
# Check firmware signature
openssl dgst -sha256 -verify pubkey.pem -signature fw.sig firmware.bin
```

---

### Network Security

- Segmented networks
- Firewalls
- VPN tunnels

```bash
# iptables example
iptables -A INPUT -p tcp --dport 1883 -j DROP
```

---

### Application Security

- Harden APIs
- Input validation
- Rate limiting

```javascript
// Secure API endpoint example
app.post("/login", (req, res) => {
  const { name } = req.body;
  db.query("SELECT * FROM users WHERE name = ?", [name], (err, result) => {
    res.send(result);
  });
});
```

---

## Future of IoT Security

- AI-driven monitoring
- Blockchain for trust
- Stricter regulations

```python
# Example: anomaly detection in IoT data
import numpy as np

data = [20, 21, 22, 80]  # anomaly at 80
mean, std = np.mean(data), np.std(data)
anomalies = [x for x in data if abs(x - mean) > 2 * std]
print("Anomalies:", anomalies)
```

---

# Thank You!

---

### Questions?
